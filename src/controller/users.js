const { getUsers, getUserById, createUsers, patchUser, deleteUsers } = require("../model/users");
const helper = require("../helper/index");
const { request } = require("express");

module.exports = {
    getUser: async (request, response) => {
        try {
            const result = await getUsers()
            // console.log(result)
            return helper.response(response, 200, "Success get patients data", result)
        } catch (error) {
            console.log(error)
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getUserById: async (request, response) => {
        try {
            const { id } = request.params;
            const result = await getUserById(id)
            return helper.response(response, 200, "Success get patient by id", result)
        } catch (error) {
            console.log(error)
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    createUser: async (request, response) => {
        try {
            const {
                patient_name,
                patient_sex,
                patient_religion,
                patient_phone,
                patient_address,
                patient_nik
            } = request.body
            const setData = {
                patient_name,
                patient_sex,
                patient_religion,
                patient_phone,
                patient_address,
                patient_nik,
                patient_created_at: new Date()
            }
            if (setData.patient_name === "") {
                return helper.response(response, 400, "Name cannot be empty");
            } else if (setData.patient_sex === "") {
                return helper.response(response, 400, "Sex/gender cannot be empty");
            } else if (setData.patient_religion === "") {
                return helper.response(response, 400, "Religion cannot be empty")
            } else if (setData.patient_phone === "") {
                return helper.response(response, 400, "Phone cannot be empty")
            } else if (setData.patient_address === "") {
                return helper.response(response, 400, "Address cannot be empty")
            } else if (setData.patient_nik === "") {
                return helper.response(response, 400, "NIK cannot be empty")
            }
            const result = await createUsers(setData)
            console.log(result)
            return helper.response(response, 201, "New patient data successfully added", result)
        } catch (error) {
            console.log(error)
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    updateUser: async (request, response) => {
        try {
            const { id } = request.params;
            const {
                patient_name,
                patient_sex,
                patient_religion,
                patient_phone,
                patient_address,
                patient_nik
            } = request.body;
            const setData = {
                patient_name,
                patient_sex,
                patient_religion,
                patient_phone,
                patient_address,
                patient_nik,
                patient_updated_at: new Date()
            }
            if (setData.patient_name === "") {
                return helper.response(response, 400, "Name cannot be empty");
            } else if (setData.patient_sex === "") {
                return helper.response(response, 400, "Sex/gender cannot be empty");
            } else if (setData.patient_religion === "") {
                return helper.response(response, 400, "Religion cannot be empty")
            } else if (setData.patient_phone === "") {
                return helper.response(response, 400, "Phone cannot be empty")
            } else if (setData.patient_address === "") {
                return helper.response(response, 400, "Address cannot be empty")
            } else if (setData.patient_nik === "") {
                return helper.response(response, 400, "NIK cannot be empty")
            }
            const checkId = await getUserById(id)
            console.log(checkId[0])
            if (checkId.length > 0) {
                const result = await patchUser(setData, id)
                return helper.response(response, 201, "Patient data successfully updated", result)
            } else {
                return helper.response(response, 404, `Patient data by id: ${id} not found`)
            }
        } catch (error) {
            console.log(error)
            // return helper.response(response, 400, "Bad Request", error)
        }
    },
    deleteUser: async (request, response) => {
        try {
            const { id } = request.params;
            const checkId = await getUserById(id)
            if (checkId.length > 0) {
                const result = await deleteUsers(id)
                return helper.response(response, 201, "Patient data successfully deleted", result)
            } else {
                return helper.response(response, 404, `Patient data by id: ${id} not found`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}