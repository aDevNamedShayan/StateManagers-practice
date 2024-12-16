import { useMutation } from "@tanstack/react-query";
import http from "../../../interceptor";

export const useLikeComment = () => {
  const LikeComment = async ( commentId ) => {
    const query = {};
    if (commentId !== "" && commentId !== null)
      query.CourseCommandId = commentId;
    try {
      const res = await http.post(`/Course/AddCourseCommentLike`, null, {
        params: query,
      });
      return res;
    } catch (error) {
      console.log("Error in LikeComment: ", error);
      throw error;
    }
  };
  return useMutation({
    mutationKey: ["LikeComment"],
    mutationFn: LikeComment,
  });
};
