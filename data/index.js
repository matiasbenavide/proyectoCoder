import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS order (
                    id INTEGER PRIMARY KEY NOT NULL,
                    product TEXT NOT NULL
                )`,
                [],
                () => resolve(),
                (_, err) => reject(err),
            )
        });
    });
};

export const insertOrder = (
    product
) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO order (product) VALUES (?)`,
                [product],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
}

export const fetchOrders = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM order',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
}