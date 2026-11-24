-- ============================================================
-- سند SANAD — المرحلة 4: طلبات المدرسين + الإعلانات
-- (teacher_requests + announcements)
-- ============================================================
-- التطبيق: انسخ هذا الملف كاملاً والصقه في محرر SQL في لوحة
-- تحكم Supabase لمشروع سند (ref: tyrktpttzgyeprxhsntg) ثم نفّذه
-- مرة واحدة. لا يُنفَّذ تلقائياً من الموقع.
--
-- الافتراضات (مطابقة للإعداد الحي):
--   * جدول public.profiles موجود، وعموداه id uuid و role text،
--     وقيم الدور تشمل 'مدير عام' و'مشرف محتوى' و'مدرس' و'مراجع' و'طالب'.
--   * دالة public.is_admin() موجودة (أُنشئت في contact_messages.sql
--     وطُبّقت في المرحلة 1) — السياسات هنا تستدعيها ولا تعيد تعريفها.
--   * درس المرحلة 2: سياسات RLS وحدها لا تكفي — بدون GRANT صريح
--     على الجدول يفشل PostgREST بـ 42501 قبل أن تُقيَّم السياسات.
--     لذلك يتضمن هذا الملف GRANTs بأقل الامتيازات لكل جدول.
-- الملف idempotent: آمن لإعادة التنفيذ.
-- ============================================================

-- ---------- جدول طلبات المدرسين ----------
-- طلب تصحيح معلومة / إضافة درس أو محاضرة، يراجعه المدير العام
-- أو مشرف المحتوى من لوحة الإدارة. أي مستخدم مسجّل يستطيع إرسال
-- طلب (تُراجَع كل الطلبات من الإدارة قبل أي نشر)، ولا يرى الطالب
-- إلا طلباته هو.
create table if not exists public.teacher_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  teacher_name text not null,
  type text not null,
  subject text not null,
  grade text not null,
  details text not null,
  lesson_url text,
  status text not null default 'جديد',
  admin_note text,
  created_at timestamptz not null default now(),
  constraint teacher_requests_type_allowed
    check (type in ('تصحيح معلومة', 'إضافة درس', 'إضافة محاضرة', 'أخرى')),
  constraint teacher_requests_status_allowed
    check (status in ('جديد', 'قيد المراجعة', 'تمت المعالجة', 'مرفوض')),
  constraint teacher_requests_name_len
    check (char_length(teacher_name) >= 1 and char_length(teacher_name) <= 100),
  constraint teacher_requests_details_len
    check (char_length(details) >= 1 and char_length(details) <= 2000),
  constraint teacher_requests_url_len
    check (lesson_url is null or char_length(lesson_url) <= 500)
);

create index if not exists teacher_requests_created_at_idx
  on public.teacher_requests (created_at desc);
create index if not exists teacher_requests_user_idx
  on public.teacher_requests (user_id);

alter table public.teacher_requests enable row level security;

-- الإرسال: أي مستخدم مسجّل، بشرط أن يكون الطلب باسمه.
drop policy if exists "teacher_requests_insert_own" on public.teacher_requests;
create policy "teacher_requests_insert_own"
  on public.teacher_requests
  for insert
  to authenticated
  with check (user_id = auth.uid());

-- القراءة: صاحب الطلب، أو المدير العام.
drop policy if exists "teacher_requests_select_own_or_admin" on public.teacher_requests;
create policy "teacher_requests_select_own_or_admin"
  on public.teacher_requests
  for select
  to authenticated
  using (user_id = auth.uid() or public.is_admin());

-- التحديث (الحالة + ملاحظة الإدارة): المدير العام فقط.
drop policy if exists "teacher_requests_update_admin" on public.teacher_requests;
create policy "teacher_requests_update_admin"
  on public.teacher_requests
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- لا توجد سياسة حذف: لا يستطيع أحد حذف طلب عبر واجهة API.

-- ---------- جدول الإعلانات ----------
-- إعلانات يكتبها المدير العام من لوحة الإدارة وتظهر في «ملفي»
-- للطلاب (وللمدرسين حسب الجمهور). القراءة عامة لأن الإعلان
-- موجّه لكل الطلاب أصلاً؛ الكتابة والتعديل والحذف للمدير فقط.
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  audience text not null default 'all',
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  constraint announcements_title_len
    check (char_length(title) >= 1 and char_length(title) <= 150),
  constraint announcements_body_len
    check (char_length(body) >= 1 and char_length(body) <= 2000),
  constraint announcements_audience_allowed
    check (audience in ('all', 'students', 'teachers'))
);

create index if not exists announcements_created_at_idx
  on public.announcements (created_at desc);

alter table public.announcements enable row level security;

-- القراءة: الجميع (ضيف أو مسجّل) — الإعلان منشور علناً أصلاً.
drop policy if exists "announcements_select_anyone" on public.announcements;
create policy "announcements_select_anyone"
  on public.announcements
  for select
  to anon, authenticated
  using (true);

-- الإنشاء: المدير العام فقط.
drop policy if exists "announcements_insert_admin" on public.announcements;
create policy "announcements_insert_admin"
  on public.announcements
  for insert
  to authenticated
  with check (public.is_admin());

-- التحديث: المدير العام فقط.
drop policy if exists "announcements_update_admin" on public.announcements;
create policy "announcements_update_admin"
  on public.announcements
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- الحذف: المدير العام فقط.
drop policy if exists "announcements_delete_admin" on public.announcements;
create policy "announcements_delete_admin"
  on public.announcements
  for delete
  to authenticated
  using (public.is_admin());

-- ---------- GRANTs (إلزامية — بدونها 42501 قبل تقييم RLS) ----------
grant select, insert, update on public.teacher_requests to authenticated;
grant select on public.announcements to anon, authenticated;
grant insert, update, delete on public.announcements to authenticated;
