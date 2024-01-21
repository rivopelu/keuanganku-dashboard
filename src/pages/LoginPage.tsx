import { InputText } from "../components/InputText.tsx";
import { Lock, Person } from "@mui/icons-material";
import { Btn } from "../components/Btn.tsx";
import { useTranslation } from "react-i18next";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes.ts";

export function LoginPage() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function onClickLogin() {
    navigate(ROUTES.ROOT);
  }

  return (
    <div className={"grid grid-cols-2 min-h-screen bg-white"}>
      <div className={"bg- h-full"}></div>
      <div className={"h-full w-full flex items-center justify-center"}>
        <div
          className={
            " p-10  w-full max-w-md  rounded-md text-center grid gap-10"
          }
        >
          <div>
            <h1 className={"font-bold text-primary-main text-3xl mb-4"}>
              KEUANGANKU
            </h1>
            <div className={"font-bold text-xl"}>
              {t("sign_in_to_your_account")}
            </div>
            <div>
              {t("dont_have_account")}
              <span className={"text-primary-main cursor-pointer"}>
                {t("register_here")}
              </span>
            </div>
          </div>
          <div className={"w-full grid gap-5"}>
            <InputText
              endIcon={<Person />}
              label={t("email")}
              placeholder={t("insert_email")}
            />
            <InputText
              endIcon={<Lock />}
              label={t("password")}
              type={showPassword ? "text" : "password"}
              placeholder={t("insert_password")}
            />
            <FormControlLabel
              onChange={() => setShowPassword(!showPassword)}
              control={<Checkbox checked={showPassword} />}
              label={t("show_password")}
            />

            <Btn onClick={onClickLogin}>{t("sign_in")}</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
