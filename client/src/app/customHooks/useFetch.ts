"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";

const useFetch = (url: string) => {
  // const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [url]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return data;
};

export default useFetch;
