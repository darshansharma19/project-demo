import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { loader as monacoLoader } from '@monaco-editor/react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface MonacoEditorProps {
    language: string;
    value: string;
    onChange: (value: string) => void;
    darkMode?: boolean;
    background?: string;
};

const MyMonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange, darkMode, background }) => {
    useEffect(() => {
        monacoLoader.init().then(monaco => {
          const themeName = darkMode ? 'myDarkTheme' : 'myLightTheme';
    
          monaco.editor.defineTheme(themeName, {
            base: darkMode ? 'vs-dark' : 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': background || darkMode ? '#c88aff' : '#4500d8',
               
            },
          });
    
          monaco.editor.setTheme(themeName);
        });
      }, [darkMode]);

    return (
        <div className="">
            <MonacoEditor
                height="200px"
                width="w-full"
                language={language}
                value={value}
                onChange={onChange as any}
                theme='vs-dark'
            />
        </div>
    );
};

export default MyMonacoEditor;