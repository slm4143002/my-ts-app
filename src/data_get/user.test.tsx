import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";

let container: HTMLDivElement;
beforeEach(() => {
  // レンダリングターゲットとしてDOM要素を設定する
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 終了時のクリーンアップ
  document.body.removeChild(container);
});

it("renders user data", async () => {
  const fakeUser = {
    id: "123",
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };
  const mock = jest.spyOn(global, "fetch");
  mock.mockReturnValueOnce(
    Promise.resolve(new Response(JSON.stringify(fakeUser)))
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="1" />, container);
  });

  let _summary = container.querySelector("summary");
  let _strong = container.querySelector("strong");

  if (_summary != null) {
    expect(_summary.textContent).toBe(fakeUser.name);
  }
  if (_strong != null) {
    expect(_strong.textContent).toBe(fakeUser.age);
  }

  expect(container.textContent).toContain(fakeUser.address);

  // テストが完全に分離されていることを確認するために、モックを削除します。
  mock.mockRestore();
});
