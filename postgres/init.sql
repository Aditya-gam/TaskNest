DO $$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database
      WHERE datname = 'taskmanager'
   ) THEN
      CREATE DATABASE taskmanager;
   END IF;
END
$$;
