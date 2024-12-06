'use client'

import { Backdrop, CircularProgress, Divider, FormHelperText, IconButton, InputBase, Paper, Tooltip } from '@mui/material';

import { useState } from 'react';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { set, useForm } from 'react-hook-form';
import writerPro from '@/configs/writerpro';
import { llmGenerate } from '@/utils/api';
import Alert from '../Alert';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

interface LLMResponse {
    choices?: Array<LLMMessage>;

}
interface LLMMessage {
    message: LLMChoice
}
interface LLMChoice {
  role: string;
  content: string;
  finishReason: string;
}

const typeOfChoice = (data: any): data is LLMResponse['choices'] => {
    return (
      data &&
      (data.choices === undefined || Array.isArray(data.choices))
    );
  };

const AITextField = () => {
    // const [generation, setGeneration] = useState<{ __html: string }>({ __html: "" });
    const [generation, setGeneration] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const {register, handleSubmit, formState: { errors}} = useForm();
    const onSubmit = (data: any) => {
        setLoading(true);
        
        const params = {
          ...data,
          tenantCode: writerPro.tenantCode,
          scene: 'essay'
        }

        llmGenerate(params)
          .then((res) => {
            if (res.code !== 0) {
                Alert.error("Generate failed, " + res.msg);
                return;
            }
            const resData = res.data;
            if (!typeOfChoice(resData)) {
                Alert.error("Invalid response data");
                return;
            }
            const generateData = resData as LLMResponse;
            if (generateData.choices && generateData.choices.length > 0) {
                // const mdStr = generateData.choices[0].message.content
                // const mdParser = new MarkdownIt();
                // const cleanHtml = DOMPurify.sanitize(mdParser.render(mdStr));
                // setGeneration({ __html: cleanHtml });
                setGeneration(generateData.choices[0].message.content);
            } else {
                // setGeneration({ __html: "No content generated" });
                setGeneration("No content generated");
            }

          })
          .catch(error => {
            Alert.error("Generate error: " + error);
          })
          .finally(() => {
            setLoading(false);
          })
        
      }


    return (
        // 可以参考 https://mui.com/material-ui/react-text-field/#customization 来自定义输入框
        <div className="flex justify-center w-full h-full">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', height: '100%'}}
                noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} 
            >
                
                <div className="flex flex-col items-center justify-center w-1/2 h-full"
                    style={{position: 'relative'}}
                    >
                    <InputBase 
                        fullWidth 
                        multiline 
                        rows={20}
                        sx={{p: '20px'}}
                        placeholder="Please input your text here, then click the button below to generate a summary."
                        error={!!errors.userPrompt}
                        
                        // 实际将值赋给userPrompt，同时也会做校验
                        {...register("userPrompt", {
                            required: "Please Enter your Essay, First",
                            pattern: {
                                value: /^\S+/i,
                                message: "Please Enter your Essay, First",
                            },
                        })} 
                        />
                    
                    {errors.userPrompt && (
                        <FormHelperText error>{errors.userPrompt?.message as string}</FormHelperText>
                    )}

                    <Backdrop
                        sx={{ 
                            color: '#fff', 
                            zIndex: (theme) => theme.zIndex.drawer + 1, 
                            position: 'absolute', 
                            backgroundColor: 'rgba(0, 0, 0, 0.2) !important' 
                        }}
                        open={loading}
                        >
                        
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    
                    <Tooltip title="Subbmit" placement='top'>
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" disabled={!!errors.userPrompt}>
                            <AcademicCapIcon className='w-5 h-5 text-indigo-500'></AcademicCapIcon>
                        </IconButton>
                    </Tooltip>
                </div>

                
                <Divider sx={{ height: '100%', m: 0.5 }} orientation="vertical" />
                
                <div className="flex flex-col items-center justify-center w-1/2 h-full"
                    style={{ height: '100%', overflowY: 'auto' }}
                    >
                    {/* TODO 这个地方的样式不太可控，后面得想办法调整样式 */}
                    <InputBase 
                        fullWidth 
                        multiline 
                        disabled
                        rows={20}
                        value={generation}
                        sx={{p: '20px'}}
                        placeholder="After your subbmition, GPT will generate a report for you"
                        
                    />
                    {/* <div className="flex flex-col items-center justify-center w-full h-full mt-5"
                        dangerouslySetInnerHTML={generation}
                        style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
                        /> */}
                </div>
            </Paper>
            {Alert.renderAlert()}
        </div>
    );
};

export default AITextField;