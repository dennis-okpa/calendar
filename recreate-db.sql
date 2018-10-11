SELECT pg_terminate_backend(pid) FROM pg_stat_activity where pid <> pg_backend_pid();

DROP DATABASE IF EXISTS "test-calendar";

CREATE DATABASE "test-calendar"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       CONNECTION LIMIT = -1;