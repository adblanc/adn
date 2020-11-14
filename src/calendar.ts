import fetch from "node-fetch";
import { API_URL } from "./shared/config";
import { ADN } from "./types";

const getAdnCalendarJson = async (date: string): Promise<ADN.Calendar> => {
  const url = `${API_URL}/video/calendar?date=${date}`;
  let response = await fetch(url);
  return response.json();
};

export const getCalendarDay = async (
  date: string
): Promise<ADN.Calendar["videos"]> => {
  const { videos } = await getAdnCalendarJson(date);

  return videos;
};
