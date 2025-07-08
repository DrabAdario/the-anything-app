import React from 'react';

function HomePage() {
        return (
                <div>
                        <h1>Welcome to My Awesome App!</h1>
                        <p>This is the home page. Explore the navigation above to learn more.</p>
                        <img
                                src="https://via.placeholder.com/600x200?text=Placeholder+Image"
                                alt="Placeholder"
                                style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
                        />
                </div>
        );
}

export default HomePage;