set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
  "userId" serial,
  "userName"       text   not null,
  "firstName"      text   not null,
  "lastName"       text   not null,
  "email"          text   not null,
  "hashedPassword" text   not null,
  "location"       text   not null,
  "details"        text   not null,
  primary key ("userId"),
  unique ("username", "email")
);
