const connection = require("../config/mysql");

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT * FROM patient`,
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error));
                } 
            )
        })
    },
    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM patient WHERE patient_id = ?`,
            id,
            (error, result) => {
                !error ? resolve(result) : reject(new Error(error));
            })
        })
    },
    createUsers: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query(
                'INSERT INTO patient SET ?',
                setData,
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            user_id: result.insertId,
                            ...setData,
                        };
                        resolve(newResult);
                    } else {
                        reject(new Error(error))
                    }
                }
            )
        })
    },
    patchUser: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                'UPDATE patient SET ? WHERE patient_id = ?',
                [setData, id],
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            patient_id: id,
                            ...setData
                        };
                        resolve(newResult)
                    } else {
                        console.log(error)
                        reject(new Error(error))
                    }
                }
            )
        })
    },
    deleteUsers: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                'DELETE FROM patient WHERE patient_id = ?',
                id,
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            id: id
                        }
                        resolve(newResult)
                    } else {
                        reject(new Error(error))
                    }
                }
            )
        })
    }
}