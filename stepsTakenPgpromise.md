
npm init -y
npm install express pg body-parser

## postgres
CREATE DATABASE pgpromisedb;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

## Stored Procedures

```sql
-- Create stored procedure for creating a new user
CREATE OR REPLACE PROCEDURE create_user(name VARCHAR, email VARCHAR)
AS $$
BEGIN
    INSERT INTO users (name, email) VALUES (name, email);
END;
$$ LANGUAGE plpgsql;

-- Create stored procedure for retrieving all users
CREATE OR REPLACE PROCEDURE get_all_users()
AS $$
BEGIN
    SELECT * FROM users;
END;
$$ LANGUAGE plpgsql;

-- Create stored procedure for retrieving a user by ID
CREATE OR REPLACE PROCEDURE get_user_by_id(user_id INT)
AS $$
BEGIN
    SELECT * FROM users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Create stored procedure for updating a user
CREATE OR REPLACE PROCEDURE update_user(user_id INT, name VARCHAR, email VARCHAR)
AS $$
BEGIN
    UPDATE users SET name = name, email = email WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Create stored procedure for deleting a user
CREATE OR REPLACE PROCEDURE delete_user(user_id INT)
AS $$
BEGIN
    DELETE FROM users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;
```
