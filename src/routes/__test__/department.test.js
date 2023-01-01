const request = require('supertest');
const app = require('../../app');

const WRONG_ID = "wrong-id";
const mockDepartment = {
    name: "Department Test",
    departmentId: 2
}

it('Should be pass with 201 /departments/create-department', async () => {
    const res = await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).not.toBe(null);
});

it('Should be return 400 Throw Error /departments/create-department', async () => {
    const res = await request(app).post(`/api/v1/departments/create-department`).send({});

    expect(res.statusCode).toBe(400);
});

it('Should be pass with 200 /departments/get-all-departments', async () => {
    await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);
    await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);

    const res = await request(app).get(`/api/v1/departments/get-all-departments`);
    expect(res.body.length).toBe(2);
    expect(res.statusCode).toBe(200);
});

it('Should be pass with 200 /departments/get-department-by-id/:id', async () => {
    const department = await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);

    const res = await request(app).get(`/api/v1/departments/get-department-by-id/${department.body.id}`).expect(200);
    expect(res.body.name).toEqual(department.body.name);
});

it('Should be return 400 Throw Error /departments/get-department-by-id/:id', async () => {
    await request(app).get(`/api/v1/departments/get-department-by-id/${WRONG_ID}`).expect(400);
});

it('Should be pass with 200 /departments/update-department-by-id/:id', async () => {
    const department = await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);

    await request(app).put(`/api/v1/departments/update-department-by-id/${department.body.id}`).send({ name: "update test" }).expect(204);
});

it('Should be return 400 Throw Error /departments/update-department-by-id/:id', async () => {
    await request(app).put(`/api/v1/departments/update-department-by-id/${WRONG_ID}`).send({ name: "test" }).expect(400);
});

it('Should be pass with 200 /departments/delete-department-by-id/:id', async () => {
    const department = await request(app).post(`/api/v1/departments/create-department`).send(mockDepartment);

    await request(app).delete(`/api/v1/departments/delete-department-by-id/${department.body.id}`).expect(204);
});

it('Should be return 400 Throw Error /departments/delete-department-by-id/:id', async () => {
    await request(app).delete(`/api/v1/departments/delete-department-by-id/${WRONG_ID}`).expect(400);
});


