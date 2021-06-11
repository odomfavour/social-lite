<template>
  <div class="container">
    <client-only></client-only>
    <b-row class="px-2">
      <b-col md="8">
        <h5 class="">Home</h5>
        <!-- {{$auth.data}} -->
        <!-- {{ getPosts }} -->
        <hr />
        <b-row>
          <b-col>
            <b-card>
              <div class="d-flex">
                <b-img :width="40" :height="40" :radius="50" fluid src="https://avatars.dicebear.com/4.5/api/initials/john.svg" class="mr-3 avatar" size="3rem"></b-img>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Whats on your mind?"
                  v-b-modal.user-post-modal
                />

                <b-modal id="user-post-modal" title="" no-close-on-backdrop hide-footer>
                  <p class="my-2">What's happening?</p>
                  <b-form @submit.prevent="createPost">
                    <b-form-textarea
                      id="textarea-small"
                      placeholder="Small textarea"
                      v-model="userPost"
                    ></b-form-textarea>
                    <div class="mt-3 d-flex justify-content-end">
                      <b-button type="submit" variant="primary">Post</b-button>
                    </div>
                  </b-form>
                </b-modal>
              </div>
            </b-card>
          </b-col>
        </b-row>
        <b-form @submit.prevent="check">
          <input type="text" v-model="name" class="form-control">
          <input type="text" v-model="age" class="form-control">
          <input type="text" v-model="email" class="form-control">
          <button type="submit">submit</button>
        </b-form>

        <div id="posts" class="mt-3" v-for="(post, index) in getPosts" :key="post.id">
          <b-card class="mb-3">
            <div class="d-flex my-3">
              <b-avatar :width="40" :height="40" fluid :src="`https://avatars.dicebear.com/4.5/api/initials/${post.username}.svg`" class="mr-3 avatar"></b-avatar>
              <div class="person">
                <p class="font-weight-bold mb-0">{{ post.username }}</p>
                <small
                  ><span class="font-weight-bold">Published:</span>
                  {{ new Date(post.createdAt).toDateString() }}</small
                >
                <div class="user-post">
                  <p>{{ post.body }}</p>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <div class="d-flex justify-content-between w-50 mx-auto">
                <div>
                  <b-icon icon="chat-left-dots" class="mr-2"></b-icon
                  >{{ post.commentCount }}
                </div>
                <div>
                  <b-icon icon="heart" class="mr-2" @click="likePost(post.id)"></b-icon>
                  {{ post.likeCount }}
                </div>
                <div>
                  <b-icon icon="share"></b-icon>
                </div>
              </div>
            </div>
            <hr />
            <client-only>
              <ul class="scrollable-comments">
                <li v-for="comment in post.comments" :key="comment.id">
                  <div class="d-flex mb-3">
                    <div>
                      <b-avatar :width="40" :height="40" fluid :src="`https://avatars.dicebear.com/4.5/api/initials/${post.username}.svg`" class="mr-3 avatar"></b-avatar>
                    </div>
                    
                    <div class="user-comment">
                      <p class="mb-0">{{ comment.username }}</p>
                      <small
                        >replying to
                        <span class="text-primary">{{
                          post.username
                        }}</span></small
                      >
                      <p>{{ comment.body }}</p>
                      <div class="d-flex justify-content-end">
                        <b-icon icon="trash-fill" variant="danger" font-scale="1.3rem"></b-icon>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </client-only>

            <div class="mt-3">
              <div class="d-flex">
                <b-avatar class="mr-3" size="3rem"></b-avatar>
                <div>
                  <b-form @submit.prevent="createComment(post.id, index)">
                  <b-row>
                    <b-col md="9">
                      <b-textarea name="" id="" class="form-control" v-model="comment.parent_id[index]"></b-textarea>
                    </b-col>
                    <b-col md="3">
                      <b-button type="submit">Comment</b-button>
                    </b-col>
                  </b-row>
                </b-form>
                </div>
                
              </div>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col md="4">
        <div id="friend-requests" class="mt-3">
          <b-card>
            <h4 class="text-primary" id="v-step-4">Friend Requests</h4>
            <div class="req-list mt-3">
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p class="mb-0">ovo@gmail</p>
                  <div class="d-flex">
                    <b-button class="btn btn-primary px-2 mr-3 "
                      >Accept</b-button
                    >
                    <b-button class="btn btn-primary px-2 py-1"
                      >Decline</b-button
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p class="mb-0">ovo@gmail</p>
                  <div class="d-flex">
                    <b-button class="btn btn-primary px-2 mr-3 "
                      >Accept</b-button
                    >
                    <b-button class="btn btn-primary px-2 py-1"
                      >Decline</b-button
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p class="mb-0">ovo@gmail</p>
                  <div class="d-flex">
                    <b-button class="btn btn-primary px-2 mr-3 "
                      >Accept</b-button
                    >
                    <b-button class="btn btn-primary px-2 py-1"
                      >Decline</b-button
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p class="mb-0">ovo@gmail</p>
                  <div class="d-flex">
                    <b-button class="btn btn-primary px-2 mr-3 "
                      >Accept</b-button
                    >
                    <b-button class="btn btn-primary px-2 py-1"
                      >Decline</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </b-card>
        </div>
        <div id="friends-list" class="pt-3 sticky-top">
          <b-card>
            <h4 class="text-primary">Friends</h4>
            <form action="">
              <input type="search" name="" class="form-control" id="" />
            </form>

            <div class="list mt-3">
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
              <div class="d-flex my-3">
                <b-avatar class="mr-3"></b-avatar>
                <div class="person">
                  <p class="font-weight-bold mb-0">Bucky Barnes</p>
                  <p>ovo@gmail</p>
                </div>
              </div>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import gql from "graphql-tag";
import GetPosts from "~/graphql/query/posts";
import createPost from "~/graphql/mutations/createPost";
import createComment from "~/graphql/mutations/createComment";
import likePost from "~/graphql/mutations/likePost";
export default {
  layout: "dashboard",
  middleware: ['isAuth'],
  apollo: {
    getPosts: {
      query: GetPosts,
      prefetch: true,
    }
  },
  data() {
    return {
      userPost: "",
      name: '',
      age: "",
      email: "",
      comment: {
        parent_id: []
      }
    }
  },
  methods: {
    check() {
      if(this.email && this.name && this.age !== '') {
        alert('am full')
      } else {
        alert('Nooooo')
      }
    },
    async createPost() {
      console.log(this.userPost)
      // let userPost = this.userPost
      this.$apollo.mutate({
        mutation: createPost,
        variables: {
          body: this.userPost
        }
      })
       this.userPost = "";
       await this.showAlert('Post created successfuly')
       await this.$bvModal.hide('user-post-modal')
    },
    async createComment(postId, n) {
      console.log(this.comment)
      console.log(n)
      console.log(postId)

      // let userPost = this.userPost
      this.$apollo.mutate({
        mutation: createComment,
        variables: {
          postId: postId,
          body: this.comment.parent_id[n]
        }
      })
       this.comment.parent_id = "";
       await this.showAlert('commet created successfuly')
      //  await this.$bvModal.hide('user-post-modal')
    },
    async likePost(postId) {
      console.log(postId)
      this.$apollo.mutate({
        mutation: likePost,
        variables: {
          postId: postId,
        }
      })
      //  this.comment.parent_id = "";
       await this.showAlert('Liked successfuly')
      //  await this.$bvModal.hide('user-post-modal')
    }
  }
};
</script>
<style>
  .avatar {
    border-radius: 50%;
  }
</style>

<style scoped>
.req-list {
  height: 280px;
  overflow-y: scroll;
}
.list {
  height: 400px;
  overflow-y: scroll;
}

.scrollable-comments {
  height: 300px;
  overflow-y: scroll;
}

.user-comment {
  width: 90%;
}

ul {
  margin: 0;
  padding-left: 15px;
}

li {
  list-style: none;
}
</style>
