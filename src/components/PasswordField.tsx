import { useId } from "react";

export default function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        密码:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>密码应该包含至少 18 个字符</p>
    </>
  );
}
