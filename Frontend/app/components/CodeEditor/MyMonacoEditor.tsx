'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { loader as monacoLoader } from '@monaco-editor/react';

// Import MonacoEditorProps interface
interface MonacoEditorProps {
    language: string;
    value: string;
    onChange: (value: string) => void;
    darkMode?: boolean;
    background?: string;
}

// Import MonacoEditor dynamically
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

// Define MyMonacoEditor functional component
const MyMonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange, darkMode, background }) => {
    useEffect(() => {
        monacoLoader.init().then(monaco => {
            const themeName = darkMode ? 'myDarkTheme' : 'myLightTheme';

            monaco.editor.defineTheme(themeName, {
                base: darkMode ? 'vs-dark' : 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': background || (darkMode ? '#c88aff' : '#ffffff'),
                },
            });

            monaco.editor.setTheme(themeName);
        });
    }, [darkMode, background]);

    return (
        <div className="">
            <MonacoEditor
                height="200px"
                width="w-full" // Adjusted width value
                language={language}
                value={value}
                theme='vs-dark'// Adjusted theme value
                options={{
                    scrollbar: {
                        vertical: 'hidden',
                        horizontal: 'hidden'
                    }
                }}     
            />
        </div>
    );
};

export default MyMonacoEditor;
