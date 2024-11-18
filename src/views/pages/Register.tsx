'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useForm } from 'react-hook-form'
import writerPro from '@/configs/writerpro'
import { apiLogin, apiRegister } from '@/utils/api'
import { useRouter } from 'next/dist/client/components/navigation'
import FormHelperText from '@mui/material/FormHelperText'
import Alert from '../../components/Alert'


const Register = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const {register, handleSubmit, formState: { errors}} = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    const params = {
      ...data,
      tenantCode: writerPro.tenantCode,
      loginType: 'email'
    }
    apiRegister(params)
      .then((res) => {
        if (res.code !== 0) {
          Alert.error("Login failed, " + res.msg);
          return;
        }
        localStorage.setItem('writer_user', JSON.stringify(res.data));
        router.push(writerPro.loginSuccessPage);
      })
      .catch(error => {
        Alert.error("Login error: " + error);
      });
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-start mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4'>Adventure starts here 🚀</Typography>
          <div className='flex flex-col gap-5'>
            <Typography className='mbs-1'>Make your app management easy and fun!</Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
              <TextField autoFocus fullWidth label='Username' 
                error={!!errors.nickname}
                helperText={!!errors.nickname && errors.nickname?.message as string}
                {...register("nickname", {
                  required: "Enter your uname",
                  pattern: {
                    value: /^\S{4,16}$/i,
                    message: "Uname must be 4 to 16 characters",
                  },
                })} 
                />
              <TextField fullWidth label='Email' 
                error={!!errors.email}
                helperText={!!errors.email && errors.email?.message as string}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })} 
                />
              <TextField
                fullWidth
                label='Password'
                type={isPasswordShown ? 'text' : 'password'}
                error={!!errors.password}
                helperText={!!errors.password && errors.password?.message as string}
                {...register("password", {
                  required: "Enter your password",
                  pattern: {
                    value: /^\S{6,24}$/i,
                    message: "Password length must be between 6 and 24 characters",
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={<Checkbox 
                  {...register("agreement", {
                    required: "Please read 'the privacy policy & terms' first."
                  })}
                />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
              <FormHelperText error={!!errors.agreement}>{errors.agreement?.message as string}</FormHelperText>
              <Button fullWidth variant='contained' type='submit'>
                Sign Up
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>Already have an account?</Typography>
                <Typography component={Link} href='/login' color='primary'>
                  Sign in instead
                </Typography>
              </div>
              <Divider className='gap-3'>Or</Divider>
              <div className='flex justify-center items-center gap-2'>
                <IconButton size='small' className='text-facebook'>
                  <i className='ri-facebook-fill' />
                </IconButton>
                <IconButton size='small' className='text-twitter'>
                  <i className='ri-twitter-fill' />
                </IconButton>
                <IconButton size='small' className='text-github'>
                  <i className='ri-github-fill' />
                </IconButton>
                <IconButton size='small' className='text-googlePlus'>
                  <i className='ri-google-fill' />
                </IconButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
      {Alert.renderAlert()}
    </div>
  )
}

export default Register
