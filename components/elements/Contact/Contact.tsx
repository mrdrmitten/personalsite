import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser'
import Mask from "../Mask/Mask";
import styles from './contact.module.css'

const Contact = (props : any) => {

  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    email: '',
  })

  const [success, setSuccess] = useState(false)

  const open = props.open

  const handleChange = (e: { target: { name: string; value: string; } }) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value })
	}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs
			.send('service_wb67fnn', 'template_3q6bjtn', toSend, 'IpgzT8jaV70IHjCa5')
			.then((response) => {
				console.log('Success', response.text)
				setToSend({
					from_name: '',
					subject: '',
					message: '',
					email: '',
        })
        setSuccess(true)
        setTimeout(() => {
          props.setOpen(false)
        }, 2000)
			})
			.catch((err) => {
				console.log('Failed...', err)
      })
	}

	useEffect(() => {
		const mask = document.getElementById('mask')
		mask?.addEventListener('click', () => {
			props.setOpen(false)
		})
	})

  return (
		<>
			{open ? <Mask /> : null}
			<div
				className={`${open ? 'block' : 'hidden'} ${
					styles.container
				} flex flex-col fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg px-8 py-8 w-[80%] max-w-[500px] z-40 lg:w-[40%]`}
			>
				<button
					className="ml-auto text-white w-[40px] h-[40px] bg-accent rounded-lg hover:scale-[1.05]"
					onClick={() => props.setOpen(false)}
				>
					X
				</button>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className="flex flex-col space-y-2"
				>
					<label htmlFor="from_name" className="">
						Full Name
					</label>
					<input
						type="text"
						value={toSend.from_name}
						onChange={handleChange}
						name="from_name"
						className=""
					/>

					<label htmlFor="email" className="">
						E-mail
					</label>
					<input
						type="email"
						name="email"
						value={toSend.email}
						onChange={handleChange}
						className=""
					/>

					<label htmlFor="subject" className="">
						Subject
					</label>
					<input
						type="text"
						name="subject"
						value={toSend.subject}
						onChange={handleChange}
						className=""
					/>

					<label htmlFor="message" className="">
						Message
					</label>
					<textarea
						name="message"
						value={toSend.message}
						onChange={handleChange}
						className=""
					></textarea>

					<div className="flex flex-row items-center justify-start">
						<button
							type="submit"
							id="submitBtn"
							className={`${success ? `${styles.buttonSuccess}` : '' } px-10 mt-8 py-2 rounded-md flex flex-row items-center hover:scale-[1.05]`}
						>
							{success ? 'Thank you' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Contact