-- Write forward migration here
-- Table: public.events

CREATE TABLE public.events
(
    id integer,
    date timestamp with time zone NOT NULL,
    summary text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.events
    OWNER to postgres;