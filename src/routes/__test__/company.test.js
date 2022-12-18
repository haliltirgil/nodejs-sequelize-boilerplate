const request = require('supertest');
const app = require('../../app');

const WRONG_ID = "wrong-id";
const mockCompany = {
    name: "Test Company"
}

it('Should be pass with 201 /companies/create-company', async () => {
    const res = await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).not.toBe(null);
});

it('Should be return 400 Throw Error /companies/create-company', async () => {
    const res = await request(app).post(`/api/v1/companies/create-company`).send({});

    expect(res.statusCode).toBe(400);
});

it('Should be pass with 200 /companies/get-all-companies', async () => {
    await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);
    mockCompany.name = "Test Company 2";
    await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);

    const res = await request(app).get(`/api/v1/companies/get-all-companies`);

    expect(res.body.length).toBe(2);
    expect(res.statusCode).toBe(200);
});

it('Should be pass with 200 /companies/get-company-by-id/:id', async () => {
    const company = await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);

    const res = await request(app).get(`/api/v1/companies/get-company-by-id/${company.body.id}`).expect(200);
    expect(res.body.name).toEqual(company.body.name);
});

it('Should be return 400 Throw Error /companies/get-company-by-id/:id', async () => {
    await request(app).get(`/api/v1/companies/get-company-by-id/${WRONG_ID}`).expect(400);
});

it('Should be pass with 200 /companies/update-company-by-id/:id', async () => {
    const company = await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);

    await request(app).put(`/api/v1/companies/update-company-by-id/${company.body.id}`).send({ name: "update test" }).expect(204);
});

it('Should be return 400 Throw Error /companies/update-company-by-id/:id', async () => {
    await request(app).put(`/api/v1/companies/update-company-by-id/${WRONG_ID}`).send({ name: "test" }).expect(400);
});

it('Should be pass with 200 /companies/delete-company-by-id/:id', async () => {
    const company = await request(app).post(`/api/v1/companies/create-company`).send(mockCompany);

    await request(app).delete(`/api/v1/companies/delete-company-by-id/${company.body.id}`).expect(204);
});

it('Should be return 400 Throw Error /companies/delete-company-by-id/:id', async () => {
    await request(app).delete(`/api/v1/companies/delete-company-by-id/${WRONG_ID}`).expect(400);
});


