"use client";

import { SubmitHandler, useForm } from "react-hook-form";

enum CowboyType {
  rootin = "rootin'",
  tootin = "tootin'",
}

interface FormInputs {
  firstName: string;
  lastName: string;
  cowboyType: CowboyType;
  email: string;
}

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div className="rounded-xl bg-shenron p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-fit flex-col gap-4"
      >
        {/* First & Last */}
        <div className="flex flex-row gap-4">
          {/* TODO: create reusable string input component */}
          {/* First name */}
          <div>
            <input
              {...register("firstName", { required: true })}
              placeholder="Enter first name..."
              aria-invalid={errors.firstName ? "true" : "false"}
              className="px-2 py-1"
            />
            {/* TODO: create reusable error component */}
            {errors.firstName && (
              <span className="block" role="alert">
                This field is required
              </span>
            )}
          </div>

          {/* TODO: create reusable string input component */}
          {/* Last name */}
          <div>
            <input
              {...register("lastName", { required: true })}
              placeholder="Enter last name..."
              aria-invalid={errors.lastName ? "true" : "false"}
              className="px-2 py-1"
            />
            {/* TODO: create reusable error component */}
            {errors.lastName && (
              <span className="block" role="alert">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* TODO: create reusable select component */}
        {/* Cowboy Type */}
        <div className="w-full">
          <select
            {...register("cowboyType", { required: "This field is required" })}
            defaultValue=""
            aria-invalid={errors.cowboyType ? "true" : "false"}
            className="w-full px-2 py-1"
          >
            <option disabled hidden value="">
              - Select cowboy type -
            </option>
            <option value="rootin">Rootin'</option>
            <option value="tootin">Tootin'</option>
          </select>
          {/* TODO: create reusable error component */}
          {errors.cowboyType && (
            <span className="block" role="alert">
              {errors.cowboyType.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter email..."
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full px-2 py-1"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Submit */}
        {/* formNoValidate just disables default HTML 5 validation so that it always follows the validation we implement */}
        <input
          type="submit"
          formNoValidate
          className="cursor-pointer rounded-md bg-superSaiyan px-4 py-2 font-bold text-charcoal transition-colors duration-300 ease-in-out hover:bg-charcoal hover:text-superSaiyan"
        />
      </form>
    </div>
  );
}
