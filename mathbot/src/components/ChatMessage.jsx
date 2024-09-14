import React from "react";
import image from '../assets/img/index'
const ChatMessage = ({ item }) => {
    return (
        <div className="mb-4">
            {item.message.map((message, index) => (
                <div key={index} className="flex justify-start">
                    <img src={image.bot} className="mr-2" alt="bot" />
                    {typeof message === "string" ? (
                        <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs mb-2">
                            {message}
                        </div>
                    ) : (
                        <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs mb-2">
                            <img
                                src={message.src}
                                alt={message.alt}
                                className="mb-2 rounded-lg"
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className="flex justify-end mt-2">
                <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                    {item.response}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
