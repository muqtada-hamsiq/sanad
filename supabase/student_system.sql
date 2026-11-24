-- ============================================================
-- سند SANAD — نظام الطالب (Phase 2: student system)
-- ============================================================
-- التطبيق: انسخ هذا الملف كاملاً والصقه في محرر SQL في لوحة
-- تحكم Supabase لمشروع سند (ref: tyrktpttzgyeprxhsntg) ثم نفّذه.
-- لا يُنفَّذ تلقائياً من الموقع — يجب تطبيقه يدوياً أولاً.
--
-- الافتراضات:
--   * جدول public.profiles موجود، وعموداه id uuid و role text.
--   * دالة public.is_admin() موجودة أصلاً (من contact_messages.sql)
--     — SECURITY DEFINER مع search_path = public — لذلك سياسات
--     هذا الملف تستدعيها فقط، ولا تستعلم public.profiles مباشرة
--     داخل أي سياسة (تجنّباً للاستدعاء المتكرر RLS recursion).
--   * كل الجداول هنا مملوكة للطالب: user_id يشير إلى auth.users
--     مع ON DELETE CASCADE (حذف الحساب يحذف بيانات الطالب).
--
-- قواعد السياسات في هذا الملف:
--   * الطالب: SELECT / INSERT / UPDATE على صفه فقط
--     (user_id = auth.uid())، وحذف صفه فقط في saved_books
--     و completed_lessons.
--   * المدير العام (is_admin()): SELECT على كل الصفوف فقط.
--   * لا توجد سياسة حذف لبقية الجداول، ولا UPDATE/DELETE
--     في points_log (سجل النقاط للقراءة والإضافة فقط).
--   * كل العبارات idempotent: إعادة التنفيذ آمنة.
-- ============================================================

-- ============================================================
-- 1) exam_results — نتائج الامتحانات التي أدّاها الطالب
--    (كل محاولة امتحان: الدرجة، النسبة، الإجابات، مدة الحل)
--    attempt_id: معرّف يولّده المتصفح لكل محاولة (exam.html) حتى
--    تُحدَّث المحاولة نفسها عند إعادة الحفظ بعد التقييم الذاتي
--    بدل إنشاء صف مكرر (UNIQUE على user_id + attempt_id).
-- ============================================================
create table if not exists public.exam_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  exam_id text not null,
  attempt_id text,
  score int not null default 0,
  total_marks int not null default 0,
  pct int,
  answers jsonb not null default '[]'::jsonb,
  duration_seconds int,
  finished_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint exam_results_score_nonneg check (score >= 0),
  constraint exam_results_total_nonneg check (total_marks >= 0),
  constraint exam_results_pct_range check (pct is null or (pct >= 0 and pct <= 100)),
  constraint exam_results_duration_nonneg check (duration_seconds is null or duration_seconds >= 0)
);

create index if not exists exam_results_user_finished_idx
  on public.exam_results (user_id, finished_at desc);
create index if not exists exam_results_user_exam_idx
  on public.exam_results (user_id, exam_id);
-- فريد لكل محاولة: يمنع تكرار الصف نفسه عند إعادة الحفظ.
-- (NULL مسموح ومتعدد — الصفوف القديمة بلا attempt_id لا تتعارض.)
create unique index if not exists exam_results_user_attempt_idx
  on public.exam_results (user_id, attempt_id);

alter table public.exam_results enable row level security;

drop policy if exists "exam_results_select_own" on public.exam_results;
create policy "exam_results_select_own"
  on public.exam_results
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "exam_results_select_admin" on public.exam_results;
create policy "exam_results_select_admin"
  on public.exam_results
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "exam_results_insert_own" on public.exam_results;
create policy "exam_results_insert_own"
  on public.exam_results
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "exam_results_update_own" on public.exam_results;
create policy "exam_results_update_own"
  on public.exam_results
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- لا توجد سياسة حذف: نتائج الامتحانات لا تُحذف عبر واجهة API.

-- ============================================================
-- 2) saved_books — العناصر المحفوظة / المفضّلة للطالب
--    (كتاب، ملزمة، درس، امتحان، مراجعة مركّزة — كلها في جدول واحد)
-- ============================================================
create table if not exists public.saved_books (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  item_type text not null,
  item_id text not null,
  title text not null default '',
  created_at timestamptz not null default now(),
  constraint saved_books_item_type_allowed check (item_type in ('book', 'malazim', 'lesson', 'exam', 'revision')),
  constraint saved_books_unique_item unique (user_id, item_type, item_id)
);

create index if not exists saved_books_user_created_idx
  on public.saved_books (user_id, created_at desc);

alter table public.saved_books enable row level security;

drop policy if exists "saved_books_select_own" on public.saved_books;
create policy "saved_books_select_own"
  on public.saved_books
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "saved_books_select_admin" on public.saved_books;
create policy "saved_books_select_admin"
  on public.saved_books
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "saved_books_insert_own" on public.saved_books;
create policy "saved_books_insert_own"
  on public.saved_books
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "saved_books_update_own" on public.saved_books;
create policy "saved_books_update_own"
  on public.saved_books
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "saved_books_delete_own" on public.saved_books;
create policy "saved_books_delete_own"
  on public.saved_books
  for delete
  to authenticated
  using (user_id = auth.uid());

-- ============================================================
-- 3) completed_lessons — الدروس التي أكمل الطالب مشاهدتها
--    (lesson_key هو youtubeId أو 'pl:' + playlistId)
-- ============================================================
create table if not exists public.completed_lessons (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_key text not null,
  title text not null default '',
  grade text not null default '',
  subject text not null default '',
  youtube_id text not null default '',
  playlist_id text not null default '',
  completed_at timestamptz not null default now(),
  constraint completed_lessons_unique_lesson unique (user_id, lesson_key)
);

create index if not exists completed_lessons_user_completed_idx
  on public.completed_lessons (user_id, completed_at desc);

alter table public.completed_lessons enable row level security;

drop policy if exists "completed_lessons_select_own" on public.completed_lessons;
create policy "completed_lessons_select_own"
  on public.completed_lessons
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "completed_lessons_select_admin" on public.completed_lessons;
create policy "completed_lessons_select_admin"
  on public.completed_lessons
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "completed_lessons_insert_own" on public.completed_lessons;
create policy "completed_lessons_insert_own"
  on public.completed_lessons
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "completed_lessons_update_own" on public.completed_lessons;
create policy "completed_lessons_update_own"
  on public.completed_lessons
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "completed_lessons_delete_own" on public.completed_lessons;
create policy "completed_lessons_delete_own"
  on public.completed_lessons
  for delete
  to authenticated
  using (user_id = auth.uid());

-- ============================================================
-- 4) student_progress — ملخّص تقدّم الطالب (صف واحد لكل طالب)
--    (النقاط، عدد الدروس والامتحانات المنجزة، أفضل نسبة)
-- ============================================================
create table if not exists public.student_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  points int not null default 0,
  lessons_completed int not null default 0,
  exams_completed int not null default 0,
  best_pct int not null default 0,
  updated_at timestamptz not null default now(),
  constraint student_progress_points_nonneg check (points >= 0),
  constraint student_progress_lessons_nonneg check (lessons_completed >= 0),
  constraint student_progress_exams_nonneg check (exams_completed >= 0),
  constraint student_progress_best_pct_range check (best_pct >= 0 and best_pct <= 100)
);

alter table public.student_progress enable row level security;

drop policy if exists "student_progress_select_own" on public.student_progress;
create policy "student_progress_select_own"
  on public.student_progress
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "student_progress_select_admin" on public.student_progress;
create policy "student_progress_select_admin"
  on public.student_progress
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "student_progress_insert_own" on public.student_progress;
create policy "student_progress_insert_own"
  on public.student_progress
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "student_progress_update_own" on public.student_progress;
create policy "student_progress_update_own"
  on public.student_progress
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- لا توجد سياسة حذف: سجل التقدّم لا يُحذف عبر واجهة API.

-- ============================================================
-- 5) achievements — الشارات / الإنجازات التي نالها الطالب
-- ============================================================
create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  badge_id text not null,
  badge_name text not null default '',
  awarded_at timestamptz not null default now(),
  constraint achievements_unique_badge unique (user_id, badge_id)
);

create index if not exists achievements_user_awarded_idx
  on public.achievements (user_id, awarded_at desc);

alter table public.achievements enable row level security;

drop policy if exists "achievements_select_own" on public.achievements;
create policy "achievements_select_own"
  on public.achievements
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "achievements_select_admin" on public.achievements;
create policy "achievements_select_admin"
  on public.achievements
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "achievements_insert_own" on public.achievements;
create policy "achievements_insert_own"
  on public.achievements
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "achievements_update_own" on public.achievements;
create policy "achievements_update_own"
  on public.achievements
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- لا توجد سياسة حذف: الشارات لا تُحذف عبر واجهة API.

-- ============================================================
-- 6) points_log — سجل النقاط (قراءة وإضافة فقط، بلا تعديل أو حذف)
--    (كل سطر: كم نقطة، ولماذا، وما مرجعه — درس/امتحان/شارة)
-- ============================================================
create table if not exists public.points_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  points int not null,
  reason text not null default '',
  ref_type text not null default '',
  ref_id text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists points_log_user_created_idx
  on public.points_log (user_id, created_at desc);

alter table public.points_log enable row level security;

drop policy if exists "points_log_select_own" on public.points_log;
create policy "points_log_select_own"
  on public.points_log
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "points_log_select_admin" on public.points_log;
create policy "points_log_select_admin"
  on public.points_log
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "points_log_insert_own" on public.points_log;
create policy "points_log_insert_own"
  on public.points_log
  for insert
  to authenticated
  with check (user_id = auth.uid());

-- لا توجد سياستا UPDATE أو DELETE: سجل النقاط لا يُعدَّل ولا يُحذف.

-- ============================================================
-- 7) student_schedules — جدول دراسة الطالب (صف واحد لكل طالب)
--    (schedule: المواد وأهداف الساعات والدروس وأوقات كل يوم؛
--     done: علامات الإنجاز لكل يوم)
-- ============================================================
create table if not exists public.student_schedules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  schedule jsonb not null default '{}'::jsonb,
  done jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.student_schedules enable row level security;

drop policy if exists "student_schedules_select_own" on public.student_schedules;
create policy "student_schedules_select_own"
  on public.student_schedules
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "student_schedules_select_admin" on public.student_schedules;
create policy "student_schedules_select_admin"
  on public.student_schedules
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "student_schedules_insert_own" on public.student_schedules;
create policy "student_schedules_insert_own"
  on public.student_schedules
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "student_schedules_update_own" on public.student_schedules;
create policy "student_schedules_update_own"
  on public.student_schedules
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- لا توجد سياسة حذف: جدول الدراسة لا يُحذف عبر واجهة API.
