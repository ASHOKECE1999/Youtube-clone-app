import React from "react";
const commentsData = [
  {
    name: "ashok",
    text: "Arey Entra idi",
    reples: [
      {
        name: "ashok",
        text: "Arey Entra idi",
        reples: [
          {
            name: "ashok",
            text: "Arey Entra idi",
            reples: [
              {
                name: "ashok",
                text: "Arey Entra idi",
                reples: [
                  {
                    name: "ashok",
                    text: "Arey Entra idi",
                    reples: [
                      {
                        name: "ashok",
                        text: "Arey Entra idi",
                        reples: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ashok",
    text: "Arey Entra idi",
    reples: [
      {
        name: "ashok",
        text: "Arey Entra idi",
        reples: [],
      },
    ],
  },

  {
    name: "ashok",
    text: "Arey Entra idi",
    reples: [
      {
        name: "ashok",
        text: "Arey Entra idi",
        reples: [],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((each, index) => (
    <div>
      <Comment key={index} data={each} />
      <div className="px-5 border-l-black border-4 m-3">
        <CommentList key={index} comments={each?.reples} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, reples } = data;
  return (
    <div className="flex items-center justify-start px-3 py-2 bg-slate-400 mb-1 rounded-lg border-r-2 border-solid">
      <img
        src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
        alt="ProfileImage"
        className="h-10 m-1 "
      />
      <div className="flex flex-col">
        <h1 className="px-3">{name}</h1>
        <p className="px-3">{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold py-5 px-4 text-blue-600">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
