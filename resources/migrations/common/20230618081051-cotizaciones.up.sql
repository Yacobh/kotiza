CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--;;
CREATE TABLE cotizaciones
(
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    label varchar(2048) NOT NULL,
    done boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT now()
);
--;;
INSERT INTO cotizaciones (label) values ('example label from DB');