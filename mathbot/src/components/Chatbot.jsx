import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import UserInputForm from "./UserInputForm";
import MaterialSelection from "./MaterialSelection";
import ScoreSummary from "./ScoreSummary";
import { getSteps } from "./ChatbotStep";
import { submitScore } from "./ApiService";
import image from '../assets/img/index'

const Chatbot = () => {
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userData, setUserData] = useState({ name: "", school: "" });
    const [isUserDataEntered, setIsUserDataEntered] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isLatihan, setIsLatihan] = useState(false);
    const [currentSteps, setCurrentSteps] = useState([]);

    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isTyping]);

    useEffect(() => {
        if (selectedMaterial) {
            const steps = getSteps(selectedMaterial, userData.name);
            setCurrentSteps(steps);
        }
    }, [selectedMaterial]);

    const handleOptionClick = (option) => {
        setResponses([
            ...responses,
            { message: currentSteps[step].message, response: option.response, answer: option.key, isCorrect: option.isCorrect },
        ]);

        if (option.isCorrect) {
            setScore(score + 1);
        }

        setIsTyping(true);

        if (option.isFinish) {
            setStep(currentSteps.length - 1);
            setIsFinished(true);
        } else {
            setStep(option.nextStep);
        }
    };

    const handleMaterialSelection = (material) => {
        setSelectedMaterial(material);
        setStep(0);
        setResponses([]);
        setIsTyping(false);
        setScore(0);
        setIsFinished(false);
        
        if (material === "latihan") {
            setIsLatihan(true);
        } else {
            setIsLatihan(false);
        }
    };

    const handleBackToMaterialSelection = () => {
        setSelectedMaterial(null);
        setStep(0);
        setResponses([]);
        setIsUserDataEntered(true); // Keep user data entered but reset material
        setIsFinished(false);       // Reset the finished state
        setIsLatihan(false);        // Reset latihan mode
        setScore(0);                // Reset the score
    };

    return (
        <div className="flex flex-col h-screen bg-purple-50 relative">
            <div className="p-4">
                <h1 className="text-purple-700 font-bold text-lg">RAPERBOT</h1>
                <p className="text-sm text-gray-500">Rasio dan Perbandingan</p>
            </div>

            {/* Back button in top-left corner */}
            {selectedMaterial && (
                <button
                    onClick={handleBackToMaterialSelection}
                    className="absolute top-4 right-4 text-purple py-2 font-bold px-4 rounded-full flex items-center"
                >
                    <span className="mr-2">←</span>
                </button>
            )}

            <div className="flex-grow p-4 overflow-y-auto">
                {responses.map((item, index) => (
                    <ChatMessage key={index} item={item} />
                ))}

                {isTyping && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-300 text-gray-600 rounded-lg p-3 max-w-xs">
                            Bot is typing...
                        </div>
                    </div>
                )}
                {!isUserDataEntered ? (
                    <UserInputForm
                        userData={userData}
                        setUserData={setUserData}
                        setIsUserDataEntered={setIsUserDataEntered}
                    />
                ) : !selectedMaterial ? (
                    <MaterialSelection handleMaterialSelection={handleMaterialSelection} />
                ) : (
                    <div>
                        {!isFinished && !isTyping && currentSteps[step] && (
                            <div className="mb-4">
                                {currentSteps[step].message.map((message, index) => (
                                    <div key={index} className="flex justify-start">
                                         <img src={image.bot} className="mr-2" alt="bot" />
                                        {typeof message === 'string' ? (
                                            <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs mb-2">
                                                {message}
                                            </div>
                                        ) : (
                                            <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs mb-2">
                                                <img src={message.src} alt={message.alt} className="mb-2 rounded-lg" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="flex flex-col mt-2 ml-4">
                                    {currentSteps[step].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-2 text-left"
                                        >
                                            {typeof option.text === 'string' ? (option.text) : (
                                                <img src={option.text.src} alt={option.text.alt} className="h-6 w-6 mr-2" style={{width: '100px', height: '40px'}} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {isFinished && isLatihan && (
                    <ScoreSummary score={score} steps={currentSteps} handleSubmitScore={() => submitScore(userData, score, responses)} />
                )}
            </div>
        </div>
    );
};

export default Chatbot;
