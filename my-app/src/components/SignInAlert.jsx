import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInAlert = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.6)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
            <div style={{
                background: 'white', padding: '2rem', borderRadius: '1rem',
                textAlign: 'center', maxWidth: '400px', position: 'relative'
            }}>
               
                <button
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        color: '#666'
                    }}
                    aria-label="Close alert"
                >
                    ×
                </button>

                <h2 style={{ color: '#003559' }}>Access Restricted</h2>
                <p>You must be signed in to view this page.</p>
                <button
                    onClick={() => navigate('/signin')}
                    style={{
                        marginTop: '1rem',
                        padding: '0.6rem 1.2rem',
                        backgroundColor: '#003559',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Go to Sign In
                </button>
            </div>
        </div>
    );
};

export default SignInAlert;
