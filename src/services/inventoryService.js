import { axiosInstance } from '../helpers/axios-config';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTFkZGY2NTBmOTU3NzI3N2ZlZjU2NWUiLCJuYW1lIjoiQ3Jpc2lhbiBQYWRpbGxhIiwiaWF0IjoxNjk3NzcxODc1LCJleHAiOjE2OTc3NzkwNzV9._ZBnmCPMufrdZK8_eyv-nwt6Ye3Hr8Phv1n-65BElm4'
const getEquipos = (page) => {
    return axiosInstance.get(`api/${page}`, {
        headers: {
            'Content-type': 'application/json',
            'x-token': token
        }
    })
}

const postLaptops = (data) => {
    return axiosInstance.get('api/laptop/create', data, {
        headers: {
            'Content-type': 'application/json',
            'x-token': token
        }
    })
}

export {
    getEquipos, postLaptops,
}

