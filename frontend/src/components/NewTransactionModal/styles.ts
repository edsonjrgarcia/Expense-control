import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, .75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    border-radius: 8px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};


    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 8px;
            border: 0;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            height: 3rem;
            border: 0;
            border-radius: 8px;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;

            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme['gray-100']};
            font-weight: bold;
            
            &:hover {
                background-color: ${props => props.theme['green-700']};
                transition: background-color .2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    line-height: 0;
    background-color: transparent;
    cursor: pointer;
    

    color: ${props => props.theme['gray-500']};
`;