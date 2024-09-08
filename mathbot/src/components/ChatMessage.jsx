import React from "react";

const ChatMessage = ({ item }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-start">
                <div className="bg-purple-200 text-purple-700 rounded-lg p-3 max-w-xs">
                    {item.message}
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                    {item.response}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
