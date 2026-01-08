-- Rename wistia_id to wistia_url to store full video URLs
ALTER TABLE public.reels RENAME COLUMN wistia_id TO wistia_url;