insert into "users" ("userId", "username", "firstName", "lastName", "email", "hashedPassword", "location", "details")
values ($1, 'anonymous', $3, $4, $5, '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA', $7, $8);
