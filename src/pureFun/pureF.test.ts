import { test1, test2 } from "./pureF";
import  PureFM  from "./PureFM";

import axios, {AxiosInstance} from "axios";

// サンプル1 単純に呼び出し
test("test1 function", () => {
  expect(test1(1, 2)).toBe(3);
});

// サンプル2 mock関数(callback)
test("test2 function", () => {
  const arry1 = new Array(2, 3);
  const mockCallback = jest.fn();
  mockCallback.mockReturnValue(true);
  expect(test2(arry1, mockCallback)).toEqual(-1);

  mockCallback.mockReturnValue(false);
  expect(test2(arry1, mockCallback)).toEqual(5);
});

afterEach(
  () => jest.restoreAllMocks()
)
// サンプル３ mockモジュール
jest.mock('axios');
test("should fetch users", async () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  (axios.get as any).mockResolvedValue(resp);
  //(axios.get as any).mockResolvedValue('');
  // const myAxios:jest.Mocked<AxiosInstance> = axios as any;
  //myAxios.get.mockResolvedValue(resp);
  const result = await PureFM.all();
  expect(result).toEqual(users);
});
