import {render, screen } from '@testing-library/react'
import { MemoryRouter, Switch } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import AuthForm from './AuthForm'
import reactRouterDom from 'react-router-dom';

jest.mock('../../services/users')
jest.mock('../../context/UserContext')

it('should render AuthForm', () => {
    const { container } = render(
        <UserProvider>
        
        <MemoryRouter>
            <AuthForm />
        </MemoryRouter>
     
        </UserProvider>
    );
    expect(container).toMatchSnapshot();
} );