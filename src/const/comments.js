export const comments = [
  {
    id: 1,
    name: "amyrobson",
    avater: "/assets/img/profile-photo/profile-one.webp",
    auth_user: false,
    comment:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    commented_at: "1 month ago",
    likes: 12,
    replys: null,
  },
  {
    id: 2,
    name: "maxblagun",
    avater: "/assets/img/profile-photo/profile-two.png",
    auth_user: false,
    comment:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    commented_at: "2 weeks ago",
    likes: 5,
    replys: [
      {
        id: 1,
        name: "ramsesmiron",
        avater: "/assets/img/profile-photo/profile-three.png",
        auth_user: false,
        comment:
          "<span class='text-purple-primary font-medium'>@maxblagun</span> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        commented_at: "1 week ago",
        likes: 4,
      },
      {
        id: 2,
        name: "juliusomo",
        avater: "/assets/img/profile-photo/profile-four.jpg",
        auth_user: true,
        comment:
          "<span class='text-purple-primary font-medium'>@ramsesmiron</span> I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/ framework. But the fundamentals are what stay constant.",
        commented_at: "2 days ago",
        likes: 4,
      },
    ],
  },
];
