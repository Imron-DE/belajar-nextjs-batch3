import Input from "@/components/atoms/Input";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("render input dengan placeholder yang sesuai", () => {
    const { getByPlaceholderText } = render(<Input placeholder={"username"} />);
    // getPlaceholderText buat akses elemen dengan placeholder tertentu
    const input = getByPlaceholderText("username");
    expect(input.placeholder).toBe("username");
  });
  it("test fungsi onChange pada element input", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder={"Masukan email"} onChange={onChange} />);
    const input = getByPlaceholderText("Masukan email");
    fireEvent.change(input, { target: { value: "johndoe" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
