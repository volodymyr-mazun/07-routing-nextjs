
// ----------ОБРОБКА ПОМИЛОК----------

"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
    return (
        <div
            style={{
                padding: "40px",
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            <h2>Something went wrong!</h2>
            <p>Could not fetch note details. {error.message}</p>
            <button
                onClick={reset}
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#0d6efd",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "16px",
                }}
            >
                Try again
            </button>
        </div>
    );
}

export default Error;