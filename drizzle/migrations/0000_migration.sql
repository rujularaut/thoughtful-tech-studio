CREATE TABLE public.project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  service text NOT NULL,
  description text NOT NULL,
  budget text,
  timeline text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.project_inquiries TO service_role;

ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

CREATE INDEX project_inquiries_email_created_idx ON public.project_inquiries (email, created_at DESC);