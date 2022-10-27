set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"location" TEXT NOT NULL,
	"details" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."entries" (
	"entryId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	"caption" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"location" TEXT NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."wishList" (
	"wishListId" serial NOT NULL,
	"location" TEXT NOT NULL,
	"notes" TEXT NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "wishList_pk" PRIMARY KEY ("wishListId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "wishList" ADD CONSTRAINT "wishList_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
