import { useState } from "react"
import { baseURL } from "../../api/api";


const CreateMeet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreateMeet = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${baseURL}/create-meet/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                if (data.meet_link) {
                    window.location.href = data.meet_link; // Redirect to Google Meet
                } else {
                    throw new Error('Meet link not found');
                }
            } else {
                throw new Error('Failed to create Google Meet link');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleCreateMeet} disabled={loading} style={{ backgroundColor: '#5517A8', color: 'white' }}>
                {loading ? 'Creating Meet...' : 'Create Google Meet'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
export default CreateMeet