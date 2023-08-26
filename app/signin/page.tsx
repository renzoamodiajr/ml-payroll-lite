import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

const SignIn: NextPage = (props): JSX.Element => {
  const router = useRouter();
  return (
    <div className="mx-50 my-[230px]">
      <div className="w-[650px] m-auto">
        <Card title="Login" className="text-danger">
          <div className="mb-5">
            <div className="mb-2 p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" />
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <InputText placeholder="Password" />
            </div>
          </div>
          <Button severity="danger" className="button-block" label="Login" />
          <div className="my-5 flex justify-between items-center">
            <p className="mb-0 w-[45%] border-b-2"></p>
            <p className="mb-0">OR</p>
            <p className="mb-0 w-[45%] border-b-2"></p>
          </div>
          {/* <Link href='/signup' className="button-block"> */}
          <Button
            onClick={() => router.push("/signup")}
            severity="danger"
            className="button-block"
            label="Create Account"
            outlined
          />
          {/* </Link> */}
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
