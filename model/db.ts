import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("ms");

export const executeQuery = (query: string, params: any[] = []): void => {
  const intialize = db.execAsync(query);
  console.log(intialize)
};

export { db };

// Create tables
const createTables = () => {
  const queries = [
    `CREATE TABLE IF NOT EXISTS tbl_article (
        id INTEGER NOT NULL PRIMARY KEY,
        article_nominal INTEGER,
        article_min INTEGER,
        article_max INTEGER,
        number_control INTEGER,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        article_name TEXT,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_article_max (
        id INTEGER NOT NULL PRIMARY KEY,
        length REAL,
        inside_diameter REAL,
        outside_diameter REAL,
        flat_crush REAL,
        h20 REAL,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_article_min (
        id INTEGER NOT NULL PRIMARY KEY,
        length REAL,
        inside_diameter REAL,
        outside_diameter REAL,
        flat_crush REAL,
        h20 REAL,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_article_nominal (
        id INTEGER NOT NULL PRIMARY KEY,
        length REAL,
        inside_diameter REAL,
        outside_diameter REAL,
        flat_crush REAL,
        h20 REAL,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_assignee_history (
        id INTEGER NOT NULL PRIMARY KEY,
        order_form_id INTEGER,
        created_date TIMESTAMP,
        is_assigned BOOLEAN,
        is_exist BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_customer (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        middle_name TEXT,
        last_name TEXT,
        email TEXT,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_laboratory (
        id INTEGER NOT NULL PRIMARY KEY,
        order_form_id INTEGER,
        flat_crush REAL,
        h20 REAL,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_measurement (
        id INTEGER NOT NULL PRIMARY KEY,
        order_form_id INTEGER,
        length REAL,
        inside_diameter REAL,
        outside_diameter REAL,
        flat_crush REAL,
        h20 REAL,
        radial REAL,
        number_control INTEGER,
        remarks TEXT,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_measurement_history (
        id INTEGER NOT NULL PRIMARY KEY,
        order_form_id INTEGER,
        length REAL,
        inside_diameter REAL,
        outside_diameter REAL,
        flat_crush REAL,
        h20 REAL,
        radial REAL,
        number_control INTEGER,
        remarks TEXT,
        user_id TEXT,
        is_exist BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_orders_form (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER,
        article_id INTEGER,
        assignee TEXT,
        pallete_count INTEGER,
        is_assigned BOOLEAN,
        is_exist BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_production (
        id INTEGER NOT NULL PRIMARY KEY,
        order_form_id INTEGER,
        entry_date_time TIMESTAMP,
        exit_date_time TIMESTAMP,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_proofing (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        order_form_id INTEGER,
        entry_date_time TIMESTAMP,
        exit_date_time TIMESTAMP,
        num_pallets INTEGER,
        program_name TEXT,
        is_exist BOOLEAN,
        user_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
    `CREATE TABLE IF NOT EXISTS tbl_users (
        uuid TEXT NOT NULL PRIMARY KEY,
        first_name TEXT,
        middle_name TEXT,
        last_name TEXT,
        suffix TEXT,
        role TEXT,
        is_exist BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        email TEXT,
        is_synced BOOLEAN DEFAULT FALSE
    );`,
  ];

  queries.forEach((query) => executeQuery(query));
};

export default createTables;
