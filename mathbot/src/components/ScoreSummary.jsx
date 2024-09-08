import React from "react";

const ScoreSummary = ({ score, steps, handleSubmitScore }) => {
    return (
        <div className="mt-8">
            <p className="text-lg font-bold text-center">
                Skor kamu adalah: {score} dari {steps.length}
            </p>
            <button
                onClick={handleSubmitScore}
                className="bg-purple-500 text-white py-2 px-4 rounded-full w-full mt-4"
            >
                Submit Jawaban
            </button>
        </div>
    );
};

export default ScoreSummary;
