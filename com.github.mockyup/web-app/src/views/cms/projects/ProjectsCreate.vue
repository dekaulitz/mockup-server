<template>
  <page-container>
    <div class="d-flex align-items-center holder mt-2">
      <h1 class="page-title">Create new project</h1>
      <div class="page-controller ms-auto">
        <form-button class="btn btn-primary btn-md" @click.stop.prevent="createNewProject"
                     :form-button-attribute="formButtonAttributes"><span class="fas fa-save"/>Submit New Project
        </form-button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-9">
        <form-group>
          <form-container>
            <form-input id="projectName"
                        v-model="projectNameInputAttribute.value"
                        :input-attributes="projectNameInputAttribute"
                        :event-submitted="projectNameInputAttribute.formSubmitted"
            />
            <text-editor class="mt-3" v-model="projectDescriptionInputAttribute.value"
                         :get-content="projectDescriptionInputAttribute.formSubmitted"/>
          </form-container>
        </form-group>
      </div>
      <div class="col-3">
            <h5 class="page-title holder">Additional information</h5>
            <label class="text-break label-bold ">Project tags</label>
            <div class="text-start">
              <div class="d-inline-flex" v-for="(tag, index ) in Array.from(projectTags)"
                   :key="index">
                <delete-on-hover :value="tag" @update:deleteOnHover="removeTag">
                  <template #content>
                    <a class="me-2 project-tag"
                       :href="tag">{{ projectTag(tag, index) }}</a>
                  </template>
                </delete-on-hover>
              </div>
            </div>
            <input-searching-tags @update:projectTags="getProjectTag"/>
      </div>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContainer from '@/pages/PageContainer.vue'
import { ProjectService } from '@/service/webclient/service/ProjectService'
import FormGroup from '@/shared/form/FormGroup.vue'
import FormContainer from '@/shared/form/FormContainer.vue'
import FormInput from '@/shared/form/FormInput.vue'
import { ButtonAttribute, InputAttribute, InputValidationType } from '@/shared/form/InputModel'
import FormButton from '@/shared/form/FormButton.vue'
import { ProjectCreateRequest } from '@/service/webclient/model/Projects'
import TextEditor from '@/shared/editor/TextEditor.vue'
import InputSearchingTags from '@/components/projects/InputSearchingTags.vue'
import BaseViewComponent from '@/shared/base/BaseViewComponent'
import DeleteOnHover from '@/components/form/DeleteOnHover.vue'

export default defineComponent({
  name: 'ProjectsCreate',
  mixins: [BaseViewComponent],
  data () {
    return {
      service: ProjectService,
      directionAfterSubmit: {
        name: 'Projects'
      },
      projectTags: new Set(),
      projectNameInputAttribute: {
        type: 'text',
        placeHolder: 'Project Name',
        validMessage: 'Looks good !',
        validations: [
          {
            validationType: InputValidationType.REQUIRED,
            errMessage: 'Please input your project name'
          },
          {
            validationType: InputValidationType.Length,
            maxLength: 200,
            errMessage: 'Maximum 200 characters!'
          }
        ]
      } as InputAttribute,
      projectDescriptionInputAttribute: {
        type: 'text',
        isValid: false
      } as InputAttribute,
      formButtonAttributes: {
        isLoading: false,
        usingLoader: true
      } as ButtonAttribute
    }
  },
  components: {
    DeleteOnHover,
    InputSearchingTags,
    TextEditor,
    // AceEditor,
    // TextInput,
    FormButton,
    FormInput,
    FormContainer,
    FormGroup,
    PageContainer
  },
  methods: {
    async createNewProject () {
      this.projectNameInputAttribute.formSubmitted = true
      this.projectDescriptionInputAttribute.formSubmitted = true
      this.request = {
        projectName: this.projectNameInputAttribute.value,
        projectDescription: this.projectDescriptionInputAttribute.value,
        projectTags: Array.from(this.projectTags)
      } as ProjectCreateRequest
      if (!this.projectNameInputAttribute.isValid) {
        this.formButtonAttributes.isLoading = false
      } else {
        await this.doPost()
        this.formButtonAttributes.isLoading = false
      }
    },
    getProjectTag (tag: string): void {
      this.projectTags.add(tag)
    },
    projectTag (tag: string, index: number): string {
      if (index !== this.projectTags.size - 1) {
        return `${tag},`
      } else {
        return tag
      }
    },
    removeTag (tag: string) {
      this.projectTags.delete(tag)
    }
  }
})
</script>

<style scoped lang="scss">
</style>
