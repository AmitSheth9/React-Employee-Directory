import {render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

jest.mock('../../services/users')
jest.mock('../../context/UserContext')

it('should render Header', () => {
    const { container } = render(
        <UserProvider>
       
        <MemoryRouter>
            <Header />
        </MemoryRouter>
       
        </UserProvider>
    );
    expect(container).toMatchSnapshot();
} );