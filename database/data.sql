insert into "users" ("username", "firstName", "lastName", "email", "hashedPassword", "location", "details")
values
  ('anonymous', 'Test', 'User', 'test@mail.com', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA', 'Irvine, CA', 'This is a test user');
