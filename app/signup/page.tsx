"use client";

import { NextPage } from "next";
import Link from "next/dist/client/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller, useForm } from "react-hook-form";

type SignupForm = {
  company_name: string;
  company_email: string;
  bill_date: string;
  due_date: string;
  first_cycle_month: string;
  first_cycle_date: number;
  first_cycle_from: number;
  first_cycle_to: number;
  second_cycle_month: string;
  second_cycle_date: number;
  second_cycle_from: number;
  second_cycle_to: number;
};

const SignUp: NextPage = (props) => {
  const formData = useForm<SignupForm>();
  const { register, control, handleSubmit, formState } = formData;
  const { errors } = formState;

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  };

  return (
    <div className="mx-50 my-[100px]">
      <div className="w-[650px] m-auto">
        <Card title="Create Company Account" className="text-danger">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card flex justify-content-center"></div>
            <div className="mb-5">
              <div className="columns-2">
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Company Name"
                    className={classNames({
                      "p-invalid": errors && errors.company_name,
                    })}
                    {...register("company_name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Email Address"
                    className={classNames({
                      "p-invalid": errors && errors.company_email,
                    })}
                    {...register("company_email", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="columns-2">
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Bill Date"
                    className={classNames({
                      "p-invalid": errors && errors.bill_date,
                    })}
                    {...register("bill_date", {
                      required: true,
                    })}
                  />
                </div>
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Due Date"
                    className={classNames("w-full md:w-14rem", {
                      "p-invalid": errors && errors.due_date,
                    })}
                    {...register("due_date", {
                      required: true,
                    })}
                  />
                </div>
              </div>

              <div className="first-cycle-container mt-3">
                <label className="block font-bold">First Cycle</label>
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <Controller
                    name="first_cycle_month"
                    control={control}
                    rules={{ required: "First Cycle Month is required." }}
                    render={({ field, fieldState }) => (
                      <Dropdown
                        id={field.name}
                        value={field.value}
                        optionLabel="name"
                        placeholder="Select a Pay Cycle Month"
                        options={[{ name: "PREV" }, { name: "CURRENT" }]}
                        focusInputRef={field.ref}
                        onChange={(e) => field.onChange(e.value)}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                      />
                    )}
                  />
                </div>
                <div className="columns-3">
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="first_cycle_date"
                      control={control}
                      rules={{
                        required: "Pay Cycle Date is required.",
                        min: 1,
                      }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle Date"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="first_cycle_from"
                      control={control}
                      rules={{
                        required: "Pay Cycle From is required.",
                        min: 1,
                      }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle From"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="first_cycle_to"
                      control={control}
                      rules={{
                        required: "Pay Cycle To is required.",
                        min: 1,
                      }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle To"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="second-cycle-container mt-3">
                <label className="block font-bold">Second Cycle</label>
                <div className="mb-2 p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <Controller
                    name="second_cycle_month"
                    control={control}
                    rules={{ required: "Second Cycle Month is required." }}
                    render={({ field, fieldState }) => (
                      <Dropdown
                        id={field.name}
                        value={field.value}
                        optionLabel="name"
                        placeholder="Select a Pay Cycle Month"
                        options={[{ name: "PREV" }, { name: "CURRENT" }]}
                        focusInputRef={field.ref}
                        onChange={(e) => field.onChange(e.value)}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                      />
                    )}
                  />
                </div>
                <div className="columns-3">
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="second_cycle_date"
                      control={control}
                      rules={{ required: "Second Cycle Date is required." }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle Date"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="second_cycle_from"
                      control={control}
                      rules={{ required: "Second Cycle From is required." }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle From"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-2 p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <Controller
                      name="second_cycle_to"
                      control={control}
                      rules={{ required: "Second Cycle To is required." }}
                      render={({ field, fieldState }) => (
                        <InputNumber
                          id={field.name}
                          ref={field.ref}
                          value={field.value}
                          onBlur={field.onBlur}
                          placeholder="Pay Cycle To"
                          onChange={(e) => field.onChange(e.value)}
                          inputClassName={classNames({
                            "p-invalid": fieldState.error,
                          })}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center">
              <Button type="submit" severity="danger" label="Sign up" />
              <p className="ml-2">
                Already have an account?{" "}
                <Link className="text-[#EF4444]" href={"/"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
