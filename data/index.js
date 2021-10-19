import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('order.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CRETE TABLE IF NOT EXISTS order (
                id INTEGER PRIMARY KEY NOT NULL,
                product TEXT NOT NULL,
                image TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
                )`,
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
}

export const insertOrder = (
    product,
    image,
    lat,
    lng
) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO order (product, image, lat, lng) VALUES (?, ?, ?, ?)`,
                [product, image, lat, lng],
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