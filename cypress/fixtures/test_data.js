import { faker } from '@faker-js/faker';

export const userDetails = {
    firstName: 'Test',
    lastName: 'User',
    email: faker.internet.email('rem', 'tr', 'gib.com'),
    phone: '3193002233',
    company: 'testing',
    title: 'SDET'
}

